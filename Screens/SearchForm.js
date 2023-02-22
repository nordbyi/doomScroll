import { StyleSheet, TextInput, View } from "react-native";
import React, { useState, useEffect } from "react";

export default function SearchForm({getSearch}) {

  const [search, setSearch] = useState('')
  
  useEffect(() => {
    getSearch(search)
  }, [search])
  
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
