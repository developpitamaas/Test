const ServiceData = require("../controller/services");
const express = require("express");
const service = express.Router();

service.get("/get-all-categories", ServiceData.getAllServices);
service.post("/add-category", ServiceData.createService);
service.delete("/delete-category/:id", ServiceData.deleteService);
service.put("/update-category/:id", ServiceData.updateService);
service.get("/get-single-category/:id", ServiceData.getservicebyid);

// product
service.get("/get-products-by-service-id/:serviceId", ServiceData.getproductsbyserviceid);
service.post("/create-product", ServiceData.createProduct);
service.delete("/delete-product/:id", ServiceData.deleteProduct);
service.put("/update-product/:id", ServiceData.updateProduct);
service.get("/get-product-by-id/:id", ServiceData.getProductById);

module.exports = service;
