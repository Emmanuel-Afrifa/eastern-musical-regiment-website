# Eastern Musical Regiment – CMS (Strapi)
This directory contains the Strapi CMS used to manage the event contents for the Eastern Musical Regiment website's event page.

## Overview
- CMS: Strapi
- Purpose: Manage website content (events)
- Admin UI is used for content modeling and management.

## Setup

### Prerequisites
- Node.js >= 18
- npm

### Installation
    ```bash
    npm install
    ```

### Running the CMS locally
    ```bash
    npm run develop
    ```
    - Admin panel will be available at `http://localhost:1337/admin`

### Admin Setup
- On first run, create an admin account via the browser UI.
- Content types, roles, and permissions are configured through the Strapi dashboard.

### Environment Variables
- Environment variables are managed via .env
- Deployment-specific values are configured on Railway.

### API Usage
- Content is consumed by the frontend via Strapi’s REST API.

### Deployment
- The CMS is deployed on Strapi Cloud at the [url](https://typical-fitness-9a80421713.strapiapp.com/).
- Media uploads and content are managed through the Strapi admin interface.

### Notes
- Minimal backend customization was required for this project.
- Default Strapi configuration is used for most features.

