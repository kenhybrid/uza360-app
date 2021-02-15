import React, { Component } from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import axios from "axios";
const baseurl = "https://api.uza360.com/commerce/products";
import { Col, Row, Grid } from "react-native-easy-grid";
export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      loading: true,
      error: "",
    };
  }

  componentDidMount() {
    axios({
      method: "GET",
      url: baseurl,
      params: {
        limit: 12,
      },
    })
      .then((res) => {
        this.setState({
          loading: false,
          products: res.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          loading: false,
          error: error,
        });
      });
  }

  render() {
    const { error, loading, products } = this.state;
    if (error) {
      return (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text>Error: {error.message}</Text>;
        </View>
      );
    } else if (loading) {
      return (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text>Loading...</Text>
        </View>
      );
    } else {
      return (
        <ScrollView style={{ padding: 15, }}>
          <Grid style={{ paddingBottom: 20 ,marginBottom:50}}>
            {products.map((product) => (
              <Row
                key={product.id}
                style={{ flex: 1, margin: 5, backgroundColor: "#fff" }}
              >
                {product.media.slice(0, 1).map((image) => (
                  <View key={image.url}>
                    {/* <Text>{image.url}</Text> */}
                    <Image
                      source={{ uri: image.url }}
                      style={{ width: 100, height: 100 }}
                    />
                  </View>
                ))}
                <Text style={{ textAlign: "left", padding: 5, fontSize: 13 }}>
                  {product.name}
                </Text>

                <Text />
                <Text>{product.description}</Text>
              </Row>
            ))}
          </Grid>
        </ScrollView>
      );
    }
  }
}
