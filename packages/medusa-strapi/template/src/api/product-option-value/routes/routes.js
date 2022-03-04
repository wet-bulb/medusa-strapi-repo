'use strict';

/**
 * product-option-value router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::product-option-value.product-option-value', {
  "routes": [
    {
      "method": "GET",
      "path": "/product-option-values",
      "handler": "product-option-value.find",
      "config": {
        "policies": []
      }
    },
    {
      "method": "GET",
      "path": "/product-option-values/count",
      "handler": "product-option-value.count",
      "config": {
        "policies": []
      }
    },
    {
      "method": "GET",
      "path": "/product-option-values/:id",
      "handler": "product-option-value.findOne",
      "config": {
        "policies": []
      }
    },
    {
      "method": "POST",
      "path": "/product-option-values",
      "handler": "product-option-value.create",
      "config": {
        "policies": []
      }
    },
    {
      "method": "PUT",
      "path": "/product-option-values/:id",
      "handler": "product-option-value.update",
      "config": {
        "policies": []
      }
    },
    {
      "method": "DELETE",
      "path": "/product-option-values/:id",
      "handler": "product-option-value.delete",
      "config": {
        "policies": []
      }
    }
  ]
});
