import { useEffect, useState } from "preact/hooks";
import cardapioUrl from "./assets/cardapio.pdf";

export function CardapioAnchor(props: any) {
  let [downloadUrl, setDownloadUrl] = useState(cardapioUrl);

  useEffect(() => {
    fetch(downloadUrl)
      .then(v => v.blob())
      .then(v => setDownloadUrl(URL.createObjectURL(v)));
  }, [downloadUrl, setDownloadUrl]);

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