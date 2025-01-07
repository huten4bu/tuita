const BeforeText = (props) => {
    return (
        <>
        <h3>変換前</h3>
        <textarea
        
        onChange={e => {
            props.setInputText(e.target.value)
            props.convert(e.target.value)
        }}
        placeholder="Please input here."
        rows={4} // テキストエリアの高さを設定
        cols={50} // テキストエリアの幅を設定（任意）
      />
      </>
      
    )
}

export default BeforeText