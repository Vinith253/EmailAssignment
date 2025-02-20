import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { observer } from "mobx-react-lite";
import appStore from "../../store/appStore";
import TabHeader from "../../components/CustomHeader";
import CustomButton from "../../components/CustomButton";
import { useState } from "react";
import ValueSelectionComponent from "./components/ValueSelectionComponent";
import styles from "./style";

const SETTINGS_DATA = [
  { id: 1, label: "Settings 1", value: "settings One" },
  { id: 2, label: "Settings 2", value: "settings Two" },
  { id: 3, label: "Settings 3", value: "settings Three" },
  { id: 4, label: "Settings 4", value: "settings Four" },
  { id: 5, label: "Settings 5", value: "settings Five" },
  { id: 6, label: "Settings 6", value: "settings Six" },
  { id: 7, label: "Settings 7", value: "settings Seven" },
];

const SettingsScreen = observer(({ navigation }) => {
  const [selectedSetting, setSelectedSetting] = useState(appStore.selectedSettings);

  const handleButtonClick = () => {
    navigation.navigate("Display");
  };

  const onSelectSettings = (item) => {
    setSelectedSetting(item);
    appStore.setSettings(item.value);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TabHeader screenName="Settings" />

      {/* Settings List */}
      <View style={styles.listWrapper}>
        <FlatList
          data={SETTINGS_DATA}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContainer}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => onSelectSettings(item)}
              style={[
                styles.tab,
                selectedSetting?.value === item.value && styles.selectedTab,
              ]}
            >
              <Text style={styles.tabText}>{item.label}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {selectedSetting && <ValueSelectionComponent />}

      <View style={styles.buttonWrapper}>
        <CustomButton title="Next" onPress={handleButtonClick} />
      </View>
    </SafeAreaView>
  );
});

export default SettingsScreen;