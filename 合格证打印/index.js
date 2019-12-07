const express = require('express')
const app = express()
const mysql = require('mysql')
const bodyParser = require('body-parser')

// 数据库连接
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'test',
    port: '3306'
})

// 解决跨域问题
app.use(require('cors')())

// 拿到request的请求体body
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// 保存history记录时，需要用到userid
let userid

// 用户登录
app.post('/user/login', (req, res) => {
    userid = req.body.userid
    const password = req.body.password
    console.log(req.body)
        // 写一条sql语句字符串（模板字符串）
    const sql = `select * from user where userid='${userid}' and password='${password}'`
        // 数据库查询（sql语句变量作为参数）
    connection.query(sql, (err, result) => {
        console.log(result)
            // 没查到
        if (result.length == 0) {
            res.send({
                code: 1,
                message: '登录失败'
            })
        } else {
            // 因为数据库是datetime类型，所以存到数据库的时候必须是同样的格式
            const moment = require('moment')
            const timestamp = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
            console.log(timestamp)
                // 更新了用户的deal_time
            const sql2 = `update user set deal_time='${timestamp}' where userid='${userid}'`
            connection.query(sql2, (err, result) => {
                if (err) {
                    console.log(err.message)
                } else {
                    console.log('修改成功')
                }
            })
            res.send({
                code: 0,
                message: '登录成功'
            })
        }
    })
})

// 显示生产线列表
// 只请求数据的时候，用get请求
app.get('/produceline/list', (req, res) => {
    const sql = `select * from produce_line`
    connection.query(sql, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send({
                // 查询结果result是一个数组对象
                produceline: result
            })
        }
    })
})

// 插入一条生产线数据
app.post('/produceline/add', (req, res) => {
    const item = req.body
    const [pid, type, name, no, speed, eff, code, short, car, color, group] = [
        item.produceid,
        item.producetype,
        item.producename,
        item.produceno,
        item.speed,
        item.efficiency,
        item.destinationcode,
        item.shortname,
        item.carid,
        item.colorid,
        item.producegroup
    ]
    const sql = `insert into produce_line(produce_id,produce_type,produce_name,produce_no,speed,efficiency,destination_code,short_name,car_id,color_id,produce_group) values('${pid}','${type}','${name}','${no}','${speed}','${eff}','${code}','${short}','${car}','${color}','${group}')`
    connection.query(sql, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            const moment = require('moment')
            const timestamp = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
            const sql3 = `insert into history(userid,deal_time,history_content) values('${userid}','${timestamp}','添加生产线')`
            connection.query(sql3, (err, result) => {
                if (err) {
                    console.log(err)
                }
            })
            res.send({
                code: 0,
                message: '添加成功'
            })
        }
    })
})


// 修改一条生产线数据
app.post('/produceline/edit', (req, res) => {
    const id = req.body.prodid
    const item = req.body
    const [pid, type, name, no, speed, eff, code, short, car, color, group] = [
        item.produceid,
        item.producetype,
        item.producename,
        item.produceno,
        item.speed,
        item.efficiency,
        item.destinationcode,
        item.shortname,
        item.carid,
        item.colorid,
        item.producegroup
    ]
    const sql = `update produce_line set produce_id='${pid}', produce_type='${type}',produce_name='${name}',produce_no='${no}',speed='${speed}',efficiency='${eff}',destination_code='${code}',short_name='${short}',car_id='${car}',color_id='${color}',produce_group='${group}' where prod_id='${id}' `
    connection.query(sql, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            const moment = require('moment')
            const timestamp = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
            const sql3 = `insert into history(userid,deal_time,history_content) values('${userid}','${timestamp}','修改生产线')`
            connection.query(sql3, (err, result) => {
                if (err) {
                    console.log(err)
                }
            })
            res.send({
                code: 0,
                message: '修改成功'
            })
        }
    })
})

// 删除一条生产线
app.post('/produceline/delete', (req, res) => {
    const id = req.body.prodid
    const sql = `delete from produce_line where prod_id='${id}'`
    connection.query(sql, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            const sql2 = `select * from produce_line`
            connection.query(sql2, (err, result) => {
                if (err) {
                    console.log(err)
                } else {
                    const moment = require('moment')
                    const timestamp = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
                    const sql3 = `insert into history(userid,deal_time,history_content) values('${userid}','${timestamp}','删除生产线')`
                    connection.query(sql3, (err, result) => {
                        if (err) {
                            console.log(err)
                        }
                    })
                    res.send({
                        code: 0,
                        message: '删除成功',
                        produceline: result
                    })
                }
            })
        }
    })
})

// 显示发动机列表
app.get('/engine/list', (req, res) => {
    const sql = `select * from engine`
    connection.query(sql, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send({
                engine: result
            })
        }
    })
})

// 新增一条发动机记录
app.post('/engine/add', (req, res) => {
    const item = req.body
    const [engine, gear, name] = [
        item.engineid,
        item.gear,
        item.enginename
    ]
    const sql = `insert into engine(engine_id,gear,engine_name) values('${engine}','${gear}','${name}')`
    connection.query(sql, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            const moment = require('moment')
            const timestamp = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
            const sql3 = `insert into history(userid,deal_time,history_content) values('${userid}','${timestamp}','新增发动机')`
            connection.query(sql3, (err, result) => {
                if (err) {
                    console.log(err)
                }
            })
            res.send({
                code: 0,
                message: '添加成功'
            })
        }
    })
})

// 修改一条发动机记录
app.post('/engine/edit', (req, res) => {
    const id = req.body.engid
    const item = req.body
    const [engine, gear, name] = [
        item.engineid,
        item.gear,
        item.enginename
    ]
    const sql = `update engine set engine_id='${engine}',gear='${gear}',engine_name='${name}' where eng_id='${id}'`
    connection.query(sql, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            const moment = require('moment')
            const timestamp = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
            const sql3 = `insert into history(userid,deal_time,history_content) values('${userid}','${timestamp}','修改发动机')`
            connection.query(sql3, (err, result) => {
                if (err) {
                    console.log(err)
                }
            })
            res.send({
                code: 0,
                message: '修改成功'
            })
        }
    })
})

// 删除一条发动机记录
app.post('/engine/delete', (req, res) => {
    const id = req.body.engid
    const sql = `delete from engine where eng_id='${id}'`
    connection.query(sql, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            const sql2 = `select * from engine`
            connection.query(sql2, (err, result) => {
                if (err) {
                    console.log(err)
                } else {
                    const moment = require('moment')
                    const timestamp = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
                    const sql3 = `insert into history(userid,deal_time,history_content) values('${userid}','${timestamp}','删除发动机')`
                    connection.query(sql3, (err, result) => {
                        if (err) {
                            console.log(err)
                        }
                    })
                    res.send({
                        code: 0,
                        message: '删除成功',
                        engine: result
                    })
                }
            })
        }
    })
})

// 显示颜色列表
app.get('/color/list', (req, res) => {
    const sql = `select * from color`
    connection.query(sql, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send({
                color: result
            })
        }
    })
})

// 新增一条颜色记录
app.post('/color/add', (req, res) => {
    const item = req.body
    const [colorid, name, color] = [
        item.colorid,
        item.colorname,
        item.color
    ]
    const sql = `insert into color(color_id,color_name,color) values('${colorid}','${name}','${color}')`
    connection.query(sql, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            const moment = require('moment')
            const timestamp = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
            const sql3 = `insert into history(userid,deal_time,history_content) values('${userid}','${timestamp}','新增颜色')`
            connection.query(sql3, (err, result) => {
                if (err) {
                    console.log(err)
                }
            })
            res.send({
                code: 0,
                message: '添加成功'
            })
        }
    })
})

// 修改一条颜色记录
app.post('/color/edit', (req, res) => {
    const id = req.body.coid
    const item = req.body
    const [colorid, name, color] = [
        item.colorid,
        item.colorname,
        item.color
    ]
    const sql = `update color set color_id='${colorid}',color_name='${name}',color='${color}' where co_id='${id}'`
    connection.query(sql, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            const moment = require('moment')
            const timestamp = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
            const sql3 = `insert into history(userid,deal_time,history_content) values('${userid}','${timestamp}','修改颜色')`
            connection.query(sql3, (err, result) => {
                if (err) {
                    console.log(err)
                }
            })
            res.send({
                code: 0,
                message: '修改成功'
            })
        }
    })
})

// 删除一条颜色记录
app.post('/color/delete', (req, res) => {
    const id = req.body.coid
    const sql = `delete from color where co_id='${id}'`
    connection.query(sql, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            const sql2 = `select * from color`
            connection.query(sql2, (err, result) => {
                if (err) {
                    console.log(err)
                } else {
                    const moment = require('moment')
                    const timestamp = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
                    const sql3 = `insert into history(userid,deal_time,history_content) values('${userid}','${timestamp}','删除颜色')`
                    connection.query(sql3, (err, result) => {
                        if (err) {
                            console.log(err)
                        }
                    })
                    res.send({
                        code: 0,
                        message: '删除成功',
                        color: result
                    })
                }
            })
        }
    })
})

// 显示历史记录
app.get('/history/list', (req, res) => {
    const sql = `select * from history`
    connection.query(sql, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send({
                history: result
            })
        }
    })
})

// 监听服务器端口
app.listen(3000, () => {
    // 正常运行时...
    console.log('running...')
})