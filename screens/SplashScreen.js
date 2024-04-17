import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import COLORS from "../utils/constants";

const SplashScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="auto" />
      <ImageBackground
        style={styles.mainContainer}
        source={require("../assets/bg-wave.png")}
      >
        {/* Company Information */}
        <View style={styles.companyContainer}>
          <Image
            style={styles.companyLogo}
            source={require("../assets/logo-bni.png")}
          />
          <Text
            style={[styles.textMedium, styles.fontBold, styles.textBahamaBlue]}
          >
            Melayani Negeri Kebanggaan Bangsa
          </Text>
        </View>
        {/* Regulator Information */}
        <View style={styles.regulatorContainer}>
          <Image
            style={styles.regulatorLogo}
            source={require("../assets/logo-lps.png")}
          />
          <Text
            style={[
              styles.textExtraSmall,
              styles.textCenter,
              styles.textShipGrayMedium,
            ]}
          >
            PT Bank Negara Indonesia (Persero) Tbk. berizin dan diawasi{"\n"}
            oleh Otoritas Jasa Keuangan (OJK) serta merupakan peserta{"\n"}
            penjaminan Lembaga Penjamin Simpanan (LPS)
          </Text>
        </View>
        {/* Application Version */}
        <Text
          style={[
            styles.textExtraSmall,
            styles.textShipGrayMedium,
            { marginTop: 64 },
          ]}
        >
          v5.11.1
        </Text>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 64,
    paddingTop: 160,
  },
  companyContainer: {
    alignItems: "center",
    gap: 16,
  },
  companyLogo: {
    height: 36,
    width: 124.29,
  },
  textMedium: {
    fontSize: 12,
    lineHeight: 16.8,
  },
  fontBold: {
    fontWeight: "bold",
  },
  textBahamaBlue: {
    color: COLORS.BAHAMA_BLUE,
  },
  regulatorContainer: {
    marginTop: "auto",
    alignItems: "center",
    gap: 20,
  },
  regulatorLogo: {
    height: 28,
    width: 66,
  },
  textExtraSmall: {
    fontSize: 10,
    lineHeight: 14,
  },
  textCenter: {
    textAlign: "center",
  },
  textShipGrayMedium: {
    color: COLORS.SHIP_GRAY_MEDIUM,
  },
});
