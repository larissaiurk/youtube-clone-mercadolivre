export const BASE = 'http://localhost:3000';

export default Object.freeze({
  home: () => (window.location.href = `${BASE}`),

  produto: {
    lista: () =>
      (window.location.href = `${BASE}/product`),
    // item: idCampo =>BASE
    //   (window.location.href = `${BASE}${PATHS.CAMPO_PRODUCAO.ITEM.replace(
    //     ':idCampo',
    //     idCampo,
    //   )}`),
  },
});
