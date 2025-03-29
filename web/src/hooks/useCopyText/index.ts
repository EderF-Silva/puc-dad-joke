import { useState } from "react";

export function useCopyText() {
  const [copied, setCopied] = useState(false);

  function copyText(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1000);

      console.log("Copiado para a área de transferência.");
    }).catch(err => {
      console.error("Erro ao Copiar ", err);
    });
  }

  return { copied, copyText };
}