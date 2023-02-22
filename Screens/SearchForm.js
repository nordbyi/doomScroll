import { StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";

export default function SearchForm() {
  const [search, setSearch] = useState('')
  return (
    <View>
      <TextInput 
      // style={}
      placeholder="Search"
      type="text"
      value={search}
      onChangeText={setSearch}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
