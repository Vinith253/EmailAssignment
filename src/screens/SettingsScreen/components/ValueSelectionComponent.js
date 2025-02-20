import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  Image,
  StyleSheet,
} from "react-native";
import RightChevronIcon from "../../../assets/icons/right_arrow.png";
import BlueTickIcon from "../../../assets/icons/blue_check.png";
import BlackTickIcon from "../../../assets/icons/black_check.png";
import appStore from "../../../store/appStore";
import {
  BorderColor,
  ModalColor,
  NegativeColor,
  WhiteColor,
} from "../../../utils/colorCodes";

const values = [
  "Value Unit A",
  "Value Unit B",
  "Value Unit C",
  "Value Unit D",
  "Value Unit E",
];

const modalOptions = ["List A1", "List A2", "List A3", "List A4", "List A5"];

const ValueSelectionComponent = () => {
  const [selectedValues, setSelectedValues] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const openModal = (item) => {
    setCurrentItem(item);
    setModalVisible(true);
  };

  const selectValue = (option) => {
    setSelectedValues((prev) => ({ ...prev, [currentItem]: option }));
    setModalVisible(false);
  };

  useEffect(() => {
    selectedValues && appStore.setValues(selectedValues);
  }, [selectedValues]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Values</Text>
        <TouchableOpacity>
          <Text style={styles.helpLink}>Help link</Text>
        </TouchableOpacity>
      </View>

      {/* List */}
      <FlatList
        data={values}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.listItem}
            onPress={() => openModal(item)}
          >
            <Text style={styles.listItemText}>{item}</Text>
            <View style={styles.iconContainer}>
              <Image style={styles.icon} source={RightChevronIcon} />
              {selectedValues[item] ? (
                <Image style={styles.icon} source={BlueTickIcon} />
              ) : (
                <View style={styles.icon} />
              )}
            </View>
          </TouchableOpacity>
        )}
      />

      {/* Modal */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{currentItem}</Text>
            {modalOptions.map((option) => (
              <TouchableOpacity
                key={option}
                style={[
                  styles.modalOption,
                  selectedValues[currentItem] === option && styles.selectedOption,
                ]}
                onPress={() => selectValue(option)}
              >
                <Text>{option}</Text>
                {selectedValues[currentItem] === option && (
                  <Image style={styles.icon} source={BlackTickIcon} />
                )}
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.closeButton}
            >
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  helpLink: {
    color: "blue",
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: BorderColor,
  },
  listItemText: {
    fontSize: 16,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 15,
    height: 15,
    marginRight: 10,
  },
  iconPlaceholder: {
    width: 15,
    height: 15,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: ModalColor,
  },
  modalContent: {
    width: 300,
    backgroundColor: WhiteColor,
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalOption: {
    padding: 10,
    borderWidth: 1,
    borderColor: BorderColor,
    marginBottom: 5,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  selectedOption: {
    backgroundColor: "#e0e0e0",
  },
  closeButton: {
    marginTop: 10,
    alignItems: "center",
  },
  closeText: {
    color: NegativeColor,
    fontSize: 16,
  },
});

export default ValueSelectionComponent;