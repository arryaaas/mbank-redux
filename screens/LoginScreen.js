import React, { useState } from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from "@expo/vector-icons";
import { login } from "../redux/actions/authAction";
import COLORS from "../utils/constants";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const [modalVisible, setModalVisible] = useState(false);
  const [checked, setChecked] = useState(false);

  const data = [
    {
      id: 1,
      source: require("../assets/menu-ewallet.png"),
      text: "E-Wallet",
    },
    {
      id: 2,
      source: require("../assets/menu-qris.png"),
      text: "QRIS",
    },
    {
      id: 3,
      source: require("../assets/menu-other.png"),
      text: "Lainnya",
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <Pressable style={styles.menuItem}>
        <Image style={styles.menuImage} source={item.source} />
        <Text
          style={[
            styles.textMedium,
            styles.textCenter,
            styles.textShipGrayMedium,
            { width: 70 },
          ]}
        >
          {item.text}
        </Text>
      </Pressable>
    );
  };

  const keyExtractor = (item) => item.id;

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="auto" />
      <Modal transparent={true} visible={modalVisible}>
        {/* Backdrop */}
        <View style={styles.backdrop}>
          {/* Card */}
          <View style={styles.card}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={[
                  styles.textLarge,
                  styles.fontBold,
                  styles.textShipGrayDark,
                ]}
              >
                Selamat Datang Kembali
              </Text>
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <MaterialIcons
                  name="close"
                  size={18}
                  color={COLORS.SHIP_GRAY_MEDIUM}
                />
              </Pressable>
            </View>
            <View style={{ gap: 12 }}>
              <TextInput style={styles.textField} placeholder="User ID" />
              <TextInput style={styles.textField} placeholder="MPIN" />
              {/* Checkbox */}
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
              >
                <Pressable onPress={() => setChecked(!checked)}>
                  <MaterialIcons
                    name={!checked ? "check-box-outline-blank" : "check-box"}
                    size={18}
                    color={
                      !checked ? COLORS.SHIP_GRAY_MEDIUM : COLORS.BLAZE_ORANGE
                    }
                  />
                </Pressable>
                <Text style={[styles.textMedium, styles.textShipGrayMedium]}>
                  Simpan User ID
                </Text>
              </View>
            </View>
            <View style={{ gap: 12 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Pressable>
                  <Text
                    style={[
                      styles.textMedium,
                      styles.textShipGrayMedium,
                      styles.underline,
                    ]}
                  >
                    Lupa User ID?
                  </Text>
                </Pressable>
                <Pressable>
                  <Text
                    style={[
                      styles.textMedium,
                      styles.textShipGrayMedium,
                      styles.underline,
                    ]}
                  >
                    Lupa MPIN?
                  </Text>
                </Pressable>
              </View>
              {/* Login Button */}
              <Pressable
                style={styles.loginButton}
                onPress={() => {
                  const userToken = "dummy-token";
                  dispatch(login(userToken));
                  setModalVisible(!modalVisible);
                }}
              >
                <Text
                  style={[
                    styles.textMedium,
                    styles.loginText,
                    styles.textWhite,
                  ]}
                >
                  Login
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
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
        {/* Login Button with Icon */}
        <Pressable
          style={[styles.loginButton, { marginTop: 36, alignSelf: "stretch" }]}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={[styles.textMedium, styles.loginText, styles.textWhite]}>
            Login
          </Text>
          <Image
            style={styles.faceIdIcon}
            source={require("../assets/ic-face-id.png")}
          />
        </Pressable>
        {/* List of Menu */}
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          columnWrapperStyle={{ justifyContent: "center", gap: 40 }}
          numColumns={3}
          contentContainerStyle={{ marginTop: 24 }}
        />
        {/* Help Button */}
        <Pressable style={[styles.helpButton, { marginTop: 36 }]}>
          <MaterialIcons name="headset" size={18} color={COLORS.BLAZE_ORANGE} />
          <Text style={[styles.textSmall, styles.textBlazeOrange]}>
            Bantuan
          </Text>
        </Pressable>
        {/* Application Version */}
        <Text
          style={[
            styles.textExtraSmall,
            styles.textShipGrayMedium,
            { marginTop: 24 },
          ]}
        >
          v5.11.1
        </Text>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.MINE_SHAFT,
  },
  card: {
    marginHorizontal: 20,
    gap: 24,
    alignSelf: "stretch",
    borderRadius: 8,
    backgroundColor: COLORS.WHITE,
    padding: 20,
  },
  textLarge: {
    fontSize: 14,
    lineHeight: 19.6,
  },
  fontBold: {
    fontWeight: "bold",
  },
  textShipGrayDark: {
    color: COLORS.SHIP_GRAY_DARK,
  },
  textField: {
    height: 42,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.SHIP_GRAY_LIGHT,
    paddingLeft: 12,
    paddingRight: 10,
  },
  textMedium: {
    fontSize: 12,
    lineHeight: 16.8,
  },
  textShipGrayMedium: {
    color: COLORS.SHIP_GRAY_MEDIUM,
  },
  underline: {
    textDecorationLine: "underline",
  },
  loginButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderRadius: 50,
    backgroundColor: COLORS.BLAZE_ORANGE,
    paddingVertical: 10,
  },
  loginText: {
    lineHeight: 18,
    letterSpacing: 0.46,
  },
  textWhite: {
    color: COLORS.WHITE,
  },
  safeArea: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 40,
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
  textBahamaBlue: {
    color: COLORS.BAHAMA_BLUE,
  },
  faceIdIcon: {
    height: 18,
    width: 18,
  },
  menuItem: {
    width: 50,
    alignItems: "center",
    gap: 8,
  },
  menuImage: {
    height: 50,
    width: 50,
  },
  textCenter: {
    textAlign: "center",
  },
  helpButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
    borderRadius: 16,
    backgroundColor: COLORS.SERENADE,
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
  textSmall: {
    fontSize: 11,
    lineHeight: 15.4,
  },
  textBlazeOrange: {
    color: COLORS.BLAZE_ORANGE,
  },
  textExtraSmall: {
    fontSize: 10,
    lineHeight: 14,
  },
});
