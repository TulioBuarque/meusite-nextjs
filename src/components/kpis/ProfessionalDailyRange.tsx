useEffect(() => {
  if (canvasRef.current && dimensions.width > 0) {
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    const width = dimensions.width;
    const height = dimensions.height;
    canvasRef.current.width = width;
    canvasRef.current.height = height;

    // Fundo de teste cinza claro
    ctx.fillStyle = "#f0f0f0";
    ctx.fillRect(0, 0, width, height);

    const scale = (percent: number) => {
      const range = percentMax - percentMin || 1; // evita divisão por zero
      return height - ((percent - percentMin) / range) * height;
    };

    // Linha de teste visível no meio do canvas
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(width / 2, 0);
    ctx.lineTo(width / 2, height);
    ctx.stroke();

    // Desenhar pontos fixos para garantir visualização
    drawLevel(ctx, width / 2, 20, "Top", 0, "#ff0000");
    drawLevel(ctx, width / 2, height - 20, "Bottom", 0, "#00ff00");

    // Tenta renderizar de fato os valores fornecidos
    drawLine(ctx, width, scale(percentMin), scale(percentMax));
    drawLevel(ctx, width / 2, scale(percentMin), "Min", percentMin, "#ef4444");
    drawLevel(ctx, width / 2, scale(percentMax), "Max", percentMax, "#10b981");
    drawLevel(ctx, width / 2, scale(0), "Open", 0, "#3b82f6");
    drawLevel(ctx, width / 2, scale(percentCurrent), "Now", percentCurrent, "#6366f1");
  }
}, [dimensions, percentMin, percentMax, percentCurrent]);
