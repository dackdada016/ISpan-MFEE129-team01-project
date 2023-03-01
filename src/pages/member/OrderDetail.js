import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import 'datejs'

function OrderDetail() {
  // console.log(data)
  const { order_id } = useParams()
  const [order, setOrders] = useState([])
  // const [orderId, setOrderId] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    // const id = localStorage.getItem('id')
    const fetchData = async () => {
      const res = await fetch(
        `http://localhost:3002/orderList/orderDetail/${order_id}`,
        {
          method: 'GET',
        }
      )
      const orderData = await res.json()
      // if (orderData.length > 0) {
      //   setOrders(order[0])
      //   setOrderId(orderData[0].order_id)
      // }
      console.log(
        `http://localhost:3002/orderList/orderDetail/${order_id}`,
        order_id
      )

      // const [...orders] = order
      setOrders(orderData)
    }
    fetchData()
  }, [order_id])

  // const order = order.find(o=>o.order_id === order_id);
  return (
    <>
      <button
        type="button"
        className="btn btn-primary btn-md"
        onClick={() => navigate(-1)}
      >
        返回
      </button>
      <section>
        <h4>訂單資訊</h4>
        <hr />
        <div className="order">
          <h5>訂單詳細資訊</h5>
          <br />
          <p>訂單編號：{order[0] && order[0].order_id}</p>
          <p>
            訂單日期:
            {order[0] && new Date(order[0].order_date).toString('yyyy-MM-dd')}
          </p>
          {/* <p>
            付款方式:
            {order[0] && order[0].payment_method === 1
              ? '信用卡付款'
              : order[0].payment_method === 2
              ? '貨到付款'
              : '現場付款'}
          </p> */}
        </div>
        <hr />
        {order[0] && (
          <div className="person">
            <h5>訂購人資訊</h5>
            <br />
            <p>姓名:{order[0].recipient_name}</p>
            <p>連絡電話:{order[0].recipient_phone}</p>
            {order[0].type_id === 1 ? (
              <p>地址:{order[0].recipient_address}</p>
            ) : (
              ''
            )}
            {/* <p>{{orderDetail.type_id=1}:`地址:${orderDetail.recipient_address}`:''}</p> */}
          </div>
        )}

        <hr />

        <div className="test">
          <table>
            <thead>
              <tr>
                <th>商品圖</th>
                <th>名稱</th>
                <th>規格</th>
                <th>價格</th>
                <th>數量</th>
              </tr>
            </thead>
            <tbody>
              {order &&
                order.map((orderItem) => (
                  <tr key={orderItem.order_detail_id}>
                    <td>商品圖</td>
                    <td>{orderItem.product_name}</td>
                    <td>{orderItem.products_unit}</td>
                    <td>{orderItem.products_price}</td>
                    <td>{orderItem.products_quantity}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <hr />
        <div className="money">
          <p>
            商品總額:
            {order[0] && order[0].products_price * order[0].products_quantity}
          </p>
          <p>運費</p>
          <p>訂單總金額:</p>
        </div>
      </section>
    </>
  )
}
export default OrderDetail
