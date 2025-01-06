const BeforeText = (props) => {
    return (
        <>
        <h3>変換前</h3>
        <textarea
        
        onChange={e => {
            props.setInputText(e.target.value)
            props.convert(e.target.value)
        }}
        placeholder="ここにテキストを入力してください"
        rows={4} // テキストエリアの高さを設定
        cols={50} // テキストエリアの幅を設定（任意）
      />
      </>
      
    )
}

export default BeforeText