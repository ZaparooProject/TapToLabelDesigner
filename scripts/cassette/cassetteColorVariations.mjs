export const cassetteColorVariations = [
  {
    label: 'SufamiTurbo',
    backColor: '#a8a8a8',
    colorSpineTop: '#6dbf5b',
    colorSpineBottom: '#a8a8a8',
    frontcolorTop: '#6dbf5b',
    frontcolorBottom: '#6dbf5b',
    loadingLogoBack: '#000000',
    loadingLogoSpine: '#FFFFFF',
    loadingLogoFront: '#FFFFFF',
    nfcLogoBack: '#000000',
    nfcLogoSpine: '#FFFFFF',
    nfcLogoFront: '#FFFFFF',
  },
  {
    label: 'ps2',
    backColor: '#000000',
    colorSpineTop: '#000000',
    colorSpineBottom: '#FFFFFF',
    frontcolorTop: '#000000',
    frontcolorBottom: '#000000',
    loadingLogoBack: '#FFFFFF',
    loadingLogoSpine: '#FFFFFF',
    loadingLogoFront: '#FFFFFF',
    nfcLogoBack: '#0000FF',
    nfcLogoSpine: '#0000FF',
    nfcLogoFront: '#0000FF',
  },
  {
    label: 'steam',
    backColor: '#000000',
    colorSpineTop: '#102241',
    colorSpineBottom: '#000000',
    frontcolorTop: '#102241',
    frontcolorBottom: '#102241',
    loadingLogoBack: '#FFFFFF',
    loadingLogoSpine: '#FFFFFF',
    loadingLogoFront: '#FFFFFF',
    nfcLogoBack: '#FFFFFF',
    nfcLogoSpine: '#FFFFFF',
    nfcLogoFront: '#FFFFFF',
  },
  {
    label: 'msdos',
    backColor: '#A9A9A9',
    colorSpineTop: '#A9A9A9',
    colorSpineBottom: '#A9A9A9',
    frontcolorTop: '#A9A9A9',
    frontcolorBottom: '#A9A9A9',
    loadingLogoBack: '#000000',
    loadingLogoSpine: '#000000',
    loadingLogoFront: '#000000',
    nfcLogoBack: '#000000',
    nfcLogoSpine: '#000000',
    nfcLogoFront: '#000000',
  },
  {
    label: 'msx2',
    backColor: '#A9A9A9',
    colorSpineTop: '#1717D2',
    colorSpineBottom: '#1717D2',
    frontcolorTop: '#1717D2',
    frontcolorBottom: '#1717D2',
    loadingLogoBack: '#FFFFFF',
    loadingLogoSpine: '#FFFFFF',
    loadingLogoFront: '#FFFFFF',
    nfcLogoBack: '#FFFFFF',
    nfcLogoSpine: '#FFFFFF',
    nfcLogoFront: '#FFFFFF',
  },
  {
    label: 'xbox',
    backColor: '#000000',
    colorSpineTop: '#000000',
    colorSpineBottom: '#000000',
    frontcolorTop: '#000000',
    frontcolorBottom: '#000000',
    loadingLogoBack: '#60D03E',
    loadingLogoSpine: '#60D03E',
    loadingLogoFront: '#60D03E',
    nfcLogoBack: '#60D03E',
    nfcLogoSpine: '#60D03E',
    nfcLogoFront: '#60D03E',
  },
  {
    label: 'necpcengine',
    backColor: '#F2F2EB',
    colorSpineTop: '#F2F2EB',
    colorSpineBottom: '#F2F2EB',
    frontcolorTop: '#F2F2EB',
    frontcolorBottom: '#F2F2EB',
    loadingLogoBack: '#D83B37',
    loadingLogoSpine: '#D83B37',
    loadingLogoFront: '#D83B37',
    nfcLogoBack: '#426F59',
    nfcLogoSpine: '#426F59',
    nfcLogoFront: '#426F59',
  },
  {
    label: 'turbografx16',
    backColor: '#FAF0DB',
    colorSpineTop: '#000000',
    colorSpineBottom: '#000000',
    frontcolorTop: '#000000',
    frontcolorBottom: '#000000',
    loadingLogoBack: '#000000',
    loadingLogoSpine: '#FFFFFF',
    loadingLogoFront: '#FFFFFF',
    nfcLogoBack: '#F2AC3C',
    nfcLogoSpine: '#F2AC3C',
    nfcLogoFront: '#F2AC3C',
  },
  {
    label: 'famicom',
    backColor: '#FEFCF1',
    colorSpineTop: '#AE3130',
    colorSpineBottom: '#B3975C',
    frontcolorTop: '#AE3130',
    frontcolorBottom: '#AE3130',
    loadingLogoBack: '#000000',
    loadingLogoSpine: '#FFFFFF',
    loadingLogoFront: '#FFFFFF',
    nfcLogoBack: '#000000',
    nfcLogoSpine: '#FFFFFF',
    nfcLogoFront: '#FFFFFF',
  },
  {
    label: 'famicomdisk',
    backColor: '#FEFCF1',
    colorSpineTop: '#FFFFFF',
    colorSpineBottom: '#FFFFFF',
    frontcolorTop: '#FFFFFF',
    frontcolorBottom: '#FFFFFF',
    loadingLogoBack: '#000000',
    loadingLogoSpine: '#000000',
    loadingLogoFront: '#000000',
    nfcLogoBack: '#000000',
    nfcLogoSpine: '#EBBF45',
    nfcLogoFront: '#EBBF45',
  },
]

export const referencColorTable = {
  backColor: '#FFFF00',
  colorSpineTop: '#00FF00',
  colorSpineBottom: '#FF00FF',
  frontcolorTop: '#00FFFF',
  frontcolorBottom: '#FF0000',
  loadingLogoBack: '#1000FF',
  loadingLogoSpine: '#2000FF',
  loadingLogoFront: '#3000FF',
  nfcLogoBack: '#FF0010',
  nfcLogoSpine: '#FF0020',
  nfcLogoFront: '#FF0030',
}

export const cassetteBaseTemplate = `  {
    layout: 'horizontal',
    label: 'Casset box cover',
    overlay: {
      layerWidth: 1233,
      layerHeight: 1200,
      url: cassetTape,
      height: 1 - 123/1200,
      width: 1 - 454/1233,
      y: 123/1200,
      x: 454/1233,
      isSvg: true,
      strategy: 'cover',
    },
    edits: [{
      id: 'placeholder_logo_1',
      resource: logoResource,
    }, {
      id: 'placeholder_logo_2',
      resource: logoResource,
    }, {
      id: 'placeholder_logo_3',
      resource: logoResource,
    }],
    canEdit: true,
    author: Authors.animeotaku, // to be changed with Phoneix data
    media: TapeBoxCover,
    key: 'cassetteBoxV2',
  },
`