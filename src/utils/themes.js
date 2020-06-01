import { farmersColors, red, grey, neutral, yellow, green } from './colors';
import { primaryFont } from './typography';

export const farmersTheme = {
    primaryButton: {
      topColor: farmersColors['colorBlueHighlight'],
      bottomColor: farmersColors['colorBlueMid']
    }, 
    secondaryButton: {
      topColor: farmersColors['colorWhiteOff'],
      bottomColor: farmersColors['colorGrayLight']
    }, 
    crossSellButton: {
      topColor: farmersColors['colorRed'],
      bottomColor: farmersColors['colorRedDark']
    }, 
    primaryColor: red[100],
    secondaryColor: grey[100],
    tertiaryColor: red[100],
    primaryColorHover: red[200],
    primaryColorActive: red[100],
    textColorOnPrimary: neutral[100],
    textColor: neutral[600],
    textColorInverted: neutral[100],
    formElementBackground: neutral[100],
    textOnFormElementBackground: neutral[600],
    disabled: neutral[400],
    textOnDisabled: neutral[300],
    primaryFont,
    status: {
        warningColor: yellow[100],
        warningColorHover: yellow[200],
        warningColorActive: yellow[300],
        errorColor: red[100],
        errorColorHover: red[200],
        errorColorActive: red[300],
        successColor: green[100],
        successColorHover: green[200],
        successColorActive: green[300]
      }
  }

export const defaultTheme = {
    primaryButton: {
        topColor: farmersColors['colorGrayLight'],
        bottomColor: farmersColors['colorBlueMid']
    }, 
    secondaryButton: {
        topColor: farmersColors['colorGrayLight'],
        bottomColor: farmersColors['colorGrayDark']
    }, 
    crossSellButton: {
        topColor: farmersColors['colorGrayLight'],
        bottomColor: farmersColors['colorRedDark']
    }, 
}