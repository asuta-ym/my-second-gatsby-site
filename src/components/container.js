import React from "react"
// import containerStyles from "./container.module.css"
// スタイルシートとしてクラスを呼び込む時、いちいちクラス名を定義しないといけない？
import {container} from "./container.module.css"

export default function Container({ children }) {
  return (
  <div className={container}>{children}</div>
//   <div className={containerStyles.container}>{children}</div>
  )
}