const router = require('koa-router')();
const ListItem = require('../models/list');

router.get('/getAllItem', async (ctx, next) => {
  try{
    const result = await ListItem.find({})
    ctx.body={
      status: 1,
      msg:'获取成功',
      data: result
    }
  }catch(err){
    console.log(err)
    ctx.body={
      status: 0,
      msg:'服务器错误，拉取失败'
    }
  }
})

router.post('/pushAllItem',async (ctx, next) => {
  const {data} = ctx.request.body;
  data.forEach(item => {
    item._id = item.id;
    item.value = item.val;
    delete item.id;
    delete item.val;
  })
  try{
    await ListItem.remove({});
    await ListItem.insertMany(data);
    ctx.body={
      status: 1,
      msg:'推送成功'
    }
  }catch(err){
    console.log(err)
    ctx.body={
      status: 0,
      msg:'服务器错误，推送失败'
    }
  }
})

router.delete('/clearCompleted', async (ctx, next) => {
  try{
    await ListItem.remove({finished: true});
    ctx.body={
      status: 1,
      msg:'清除成功'
    }
  }catch(err){
    console.log(err)
    ctx.body={
      status: 0,
      msg:'服务器错误，清除失败'
    }
  }
})

router.post('/addItem', async (ctx, next) => {
  const {id, val, finished} = ctx.request.body;
  const newItem = new ListItem({
    _id: id,
    value: val,
    finished
  })
  try{
    await newItem.save()
    ctx.body={
      status: 1,
      msg: '添加成功'
    } 
  }catch(err){
    console.log(err)
    ctx.body={
      status: 0,
      msg:'服务器错误，添加失败'
    }
  }
})

router.put('/updateItemById', async (ctx, next) => {
  const {id, val} = ctx.request.body;
  try{
    await ListItem.findByIdAndUpdate(id,{value: val})
    ctx.body={
      status: 1,
      msg: '修改成功'
    } 
  }catch(err){
    console.log(err)
    ctx.body={
      status: 0,
      msg:'服务器错误，添加失败'
    }
  }
})

router.put('/toogleItem', async (ctx, next) => {
  const {id, finished} = ctx.request.body;
  try{
    await ListItem.findByIdAndUpdate(id,{finished: finished})
    ctx.body={
      status: 1,
      msg: '修改成功'
    } 
  }catch(err){
    console.log(err)
    ctx.body={
      status: 0,
      msg:'服务器错误，添加失败'
    }
  }
})

router.delete('/deleteItemById', async (ctx, next) => {
  const {id} = ctx.query;
  try{
    await ListItem.remove({_id: id})
    ctx.body={
      status: 1,
      msg: '删除成功'
    } 
  }catch(err){
    console.log(err)
    ctx.body={
      status: 0,
      msg:'服务器错误，删除失败'
    }
  }
})

module.exports = router
