const AfterText = (props) => {
    return (
        <>
        <h3>変換後</h3>
        <textarea
        readOnly
        value={props.outputText}
        placeholder="尺乇丂凵乚丁 山丨乚乚 曰乇 口凵丁尸凵丁 ."
        rows={4} // テキストエリアの高さを設定
        cols={50} // テキストエリアの幅を設定（任意）
      />
      </>
    )
}

export default AfterText