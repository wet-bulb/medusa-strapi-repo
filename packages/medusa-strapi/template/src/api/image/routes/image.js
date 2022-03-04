'use strict';

/**
 * image router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::image.image', {
  "routes": [
    {
      "method": "GET",
      "path": "/images",
      "handler": "image.find",
      "config": {
        "policies": []
      }
    },
    {
      "method": "GET",
      "path": "/images/count",
      "handler": "image.count",
      "config": {
        "policies": []
      }
    },
    {
      "method": "GET",
      "path": "/images/:id",
      "handler": "image.findOne",
      "config": {
        "policies": []
      }
    },
    {
      "method": "POST",
      "path": "/images",
      "handler": "image.create",
      "config": {
        "policies": []
      }
    },
    {
      "method": "PUT",
      "path": "/images/:id",
      "handler": "image.update",
      "config": {
        "policies": []
      }
    },
    {
      "method": "DELETE",
      "path": "/images/:id",
      "handler": "image.delete",
      "config": {
        "policies": []
      }
    }
  ]
});
