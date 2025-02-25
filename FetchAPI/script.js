(async () => {
    const ftch = await fetch("http://127.0.0.1:8080/get_html")
    const dat = await ftch.text()
    document.write(dat)
})()
