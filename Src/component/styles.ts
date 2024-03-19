import { StyleSheet } from "react-native";
import { colors } from "../constants/colors";
// import { fonts } from "../../constants/fonts"
import { RFValue } from "react-native-responsive-fontsize";
export const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%'
    //borderWidth:RFValue(10),
  },

  centered_IMag: {
    height: '100%',
    flex: 1,
    backgroundColor: "#00000002",
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  mod1al: {
    width: '100%',
    height: RFValue(80),
    alignItems: 'flex-end',
    backgroundColor: colors.CURRENT,
    borderTopLeftRadius: RFValue(20),
    borderTopRightRadius: RFValue(20),
    opacity: 0.8,

  },
  button: {
    flexDirection: 'row',
    // flex: 10,
    height: '90%',
    width: '98%',
    marginVertical: RFValue(10),
    justifyContent: 'space-around',
    alignSelf: 'center',
    borderColor: colors.WHITE,
    borderWidth: RFValue(1),
    borderTopLeftRadius: RFValue(20),
    borderTopRightRadius: RFValue(20),
    overflow: 'hidden'
  },

  im: {
    flex: 2,
    padding: RFValue(5),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.WHITE,
    // borderRadius:RFValue(10)
  },
  sactionImag: {
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  Imaghom: {
    margin: RFValue(10),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row-reverse",
  },

  Imaghomid: {

    justifyContent: "center",
    alignItems: 'center',
    flexDirection: "row-reverse",
    backgroundColor: colors.WHITE,
    borderColor: colors.CURRENT,
    borderWidth: RFValue(0.5),
    borderRadius: RFValue(10),
  },
  imag: {
    borderRadius: RFValue(10),
  },



  textuser: {
    // fontFamily: fonts.CAIROREGULARK,
    // fontSize: RFValue(14),
    color: colors.CURRENT,
    textAlign: 'center'
  },
  inputtiteuser: {
    color: colors.CURRENT,
    padding: RFValue(5),
    borderRadius: RFValue(10),
    marginVertical: RFValue(10),
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: colors.WHITE,
    borderWidth:1
    // fontFamily: fonts.CAIROREGULARK
  },
  buttom: {
    justifyContent: "center",
    alignItems: 'center',
    width: RFValue(100),
    height: RFValue(30),
    borderRadius: RFValue(30),
    right: 15,
    backgroundColor: colors.CURRENT
  },
  textbot: {
    color: colors.WHITE,
    // fontFamily: fonts.CAIROREGULARK
  },
  tasksbox: {
    flexDirection: 'row',
    width: RFValue(320),
    marginHorizontal: RFValue(10),
    marginVertical: RFValue(8),
    padding: RFValue(1),
    backgroundColor: colors.WHITE,
    justifyContent: "center",
    alignItems: 'center',
    alignSelf: 'center',
    overflow: 'hidden',
    borderRadius: RFValue(10),
    elevation: RFValue(1)
  },
  centered_view: {
    height: '100%',
    flex: 1,
    backgroundColor: "#00000039",
    justifyContent: 'center',
    alignItems: 'center'
  },
  bell_mod1al: {
    backgroundColor: colors.CURRENT,
    borderRadius: RFValue(20),
  },
  bell_button: {
    flexDirection: "column",
    // flex: 10,
    height: '85%',
    paddingVertical: RFValue(10),
    marginVertical: RFValue(10),
    justifyContent: 'space-around',
    alignSelf: 'center',
    borderColor: colors.WHITE,
    borderWidth: RFValue(1),
    borderRadius: RFValue(15),
    backgroundColor: colors.WHITE,
    overflow: 'hidden'
  },
  bell_body: {
    // flex: 0.8,
    // height:RFValue(150),
    justifyContent: 'center',
    alignItems: 'center'
  },

  mossdd: {
    flexDirection: 'column',
    justifyContent: "space-around",
    alignItems: 'center',
    flex: 1,
  },
  textmos: {
    // fontSize: RFValue(14),
    color: colors.CURRENT,
    // fontFamily: fonts.TAJAWALREGULAR,
    // marginHorizontal:RFValue(15),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textmerr: {
    // fontSize: RFValue(10),
    color: colors.RED,
    // fontFamily: fonts.CAIROREGULARK,
    // marginHorizontal:RFValue(15),
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.WHITE,
    textAlign: 'center',
    borderRadius: RFValue(5)
  },
  inputtitelcounter: {
    marginHorizontal: RFValue(10),
    marginVertical: RFValue(10),
    height: RFValue(25),
    borderRadius: RFValue(10),
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
  inputtitelcounterconvent: {
    marginHorizontal: RFValue(10),
    marginVertical: RFValue(10),
    borderColor: colors.WHITE,
    borderWidth: 1,
    borderRadius: RFValue(10),
    flexDirection: 'column',
    justifyContent: 'space-between',

  },
  inputtitelcounterinput: {
    marginHorizontal: RFValue(10),
    flexDirection: 'row',
    
  },
  inputdecerb: {
    backgroundColor: colors.WHITE,
    borderColor: colors.CURRENT,
    borderWidth: 1,
    borderRadius: RFValue(5),
    marginVertical:RFValue(10),
    alignSelf: 'center',
    justifyContent: "center",
    // fontSize: RFValue(15),
    textAlign: 'center',
    padding: RFValue(5),
    color: colors.CURRENT,
  },
  inputDiscripb: {
    backgroundColor: colors.WHITE,
    borderColor: colors.CURRENT,
    borderWidth: 1,
    borderRadius: RFValue(5),
    width: '90%',
    // fontSize: RFValue(12),
    textAlign: 'center',
    height: RFValue(50),
    padding: RFValue(5),
    color: colors.CURRENT,
  },
  inputtitelcounterbuton: {
    backgroundColor: colors.WHITE,
    marginHorizontal: RFValue(15),
    marginVertical: RFValue(15),
    borderRadius: RFValue(10),
    padding: RFValue(3),
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  inputdecerbuttom: {
    // fontSize: RFValue(14),
    textAlign: 'center',
    // fontFamily: fonts.TAJAWALEXTRABOLD,
    color: colors.CURRENT,
    flex: 0.5
  },
  ok: {
    flexDirection: 'row-reverse',
    justifyContent: "space-around",
    alignItems: 'center',
    marginHorizontal: RFValue(15)
  },
  cansall: {
    flexDirection: 'column',
    justifyContent: "space-between",
    alignItems: 'center',
    marginHorizontal: RFValue(5),
    marginTop: RFValue(5)

  },
  scrollView: {
    flexDirection: 'column',
    marginHorizontal: RFValue(5),
    height: '90%',
  },
  textbodtom: {
    // fontSize: RFValue(13),
    color: colors.WHITE,
    // fontFamily: fonts.TAJAWALREGULAR,
    marginHorizontal: RFValue(15),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textConver: {
    // fontSize: RFValue(8),
    color: colors.WHITE,
    // fontFamily: fonts.TAJAWALREGULAR,
    top: RFValue(5),
    textAlign: 'center',
    justifyContent: 'center',
  },
  contenar: {
    width: 250,
    marginHorizontal: RFValue(5),
    alignSelf: 'center'
  },
  taskhom: {
    justifyContent: 'center',
    alignItems: 'center',
    // alignSelf:"center",
    marginTop: 10,
    minHeight: 10,
    height: 30,
    paddingTop: 3,
    paddingLeft: 3,
    paddingBottom: 1,
    opacity: 0.8
  },
  textinpu: {
    // fontSize: RFValue(12),
    color: colors.WHITE,
    // fontFamily: fonts.TAJAWALEXTRABOLD,
    padding: RFValue(5)
  },
  puchcontener: {
    width: RFValue(200),
    height: RFValue(30),
    backgroundColor: colors.WHITE,
    borderRadius: (20),
    paddingHorizontal: RFValue(5),
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: RFValue(10)
  },
  puchcontener_sub1: {
    flex: 1,
    alignItems: 'center',
    borderRadius: RFValue(20),
    padding: RFValue(2),

  },
  puchcontener_sub1_text: {
    color: colors.CURRENT,
    // fontFamily: fonts.CAIROREGULARK
  },
  inputtitabzrphtion: {
    borderWidth: 1,
    borderRadius: RFValue(10),
    height: RFValue(150),
    overflow: 'hidden',
    flexWrap: 'wrap',
    borderColor: colors.CURRENT,
    color: colors.CURRENT,
    padding: 5,
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: colors.WHITE,
    // fontFamily: fonts.CAIROREGULARK
  },




}

)
