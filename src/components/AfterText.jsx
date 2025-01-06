const AfterText = (props) => {
    return (
        <>
        <h3>変換後</h3>
        <textarea
        readOnly
        value={props.outputText}
        placeholder="ここに結果が出力されます"
        rows={4} // テキストエリアの高さを設定
        cols={50} // テキストエリアの幅を設定（任意）
      />
      </>
    )
}

export default AfterText