var mongodb = require('mongodb');
var server = new mongodb.Server('localhost', 27017, {
	auto_reconnect: true
});
var db = new mongodb.Db('nodetest1', server, {
	safe: true
});

//连接db
db.open(function(err, db) {
	if (!err) {
		console.log('connect db');

		db.collection('nodeData', {
			safe: true
		}, function(err, collection) {
			if (err) {
				//console.log(err);
			} else {
				//新增数据
				// var tmp1 = {id:'1',title:'hello',number:1};
				//          collection.insert(tmp1,{safe:true},function(err, result){
				//              console.log(result);
				//          }); 
				//更新数据
				// collection.update({title:'hello'}, {$set:{number:3}}, {safe:true}, function(err, result){
				//     console.log(result);
				// });
				// 删除数据
				// collection.remove({title:'hello'},{safe:true},function(err,result){
				//                   console.log(result);
				//               });

				// console.log(collection);
				// 查询数据
				collection.find().toArray(function(err, docs) {
					console.log('find');
					console.log(docs);
					
					db.close();
				});
			}

		});
		// console.log('delete ...');
		// //删除Collection
		// db.dropCollection('mycoll',{safe:true},function(err,result){

		//           if(err){

		//         console.log('err:');
		//         console.log(err);
		//     }else{
		//         console.log('ok:');
		//         console.log(result);
		//     }
		//       }); 
	} else {
		console.log(err);
		db.close();
	}
});