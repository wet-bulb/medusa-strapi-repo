'use strict';

/**
 * shipping-profile router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::shipping-profile.shipping-profile', {
  "routes": [
    {
      "method": "GET",
      "path": "/shipping-profiles",
      "handler": "shipping-profile.find",
      "config": {
        "policies": []
      }
    },
    {
      "method": "GET",
      "path": "/shipping-profiles/count",
      "handler": "shipping-profile.count",
      "config": {
        "policies": []
      }
    },
    {
      "method": "GET",
      "path": "/shipping-profiles/:id",
      "handler": "shipping-profile.findOne",
      "config": {
        "policies": []
      }
    },
    {
      "method": "POST",
      "path": "/shipping-profiles",
      "handler": "shipping-profile.create",
      "config": {
        "policies": []
      }
    },
    {
      "method": "PUT",
      "path": "/shipping-profiles/:id",
      "handler": "shipping-profile.update",
      "config": {
        "policies": []
      }
    },
    {
      "method": "DELETE",
      "path": "/shipping-profiles/:id",
      "handler": "shipping-profile.delete",
      "config": {
        "policies": []
      }
    }
  ]
});
