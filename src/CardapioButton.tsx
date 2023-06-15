import { useEffect, useState } from "preact/hooks";

export function CardapioAnchor(props: any) {
  let [downloadUrl, setDownloadUrl] = useState("/cardapio.pdf");

  useEffect(() => {
    fetch("/cardapio.pdf")
      .then(v => v.blob())
      .then(v => setDownloadUrl(URL.createObjectURL(v)));
  }, [setDownloadUrl]);

  function downloadCached(e: Event) {
    if (downloadUrl.startsWith("blob")) {
      e.preventDefault()
      window.open(downloadUrl);
    }
  }

  return (
    <a {...props} href="/cardapio.pdf" onClick={downloadCached}>{props.children}</a>
  )
}