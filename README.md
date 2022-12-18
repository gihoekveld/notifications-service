# Notifications API

This is a simple API of notifications developed in NodeJS with NestJS and implementation of asynchronous messaging with Kafka, and testing with JestJS.

## Technologies used

- NodeJS
- NestJS
- Kafka
- Jest

## Features

- Create a notification
- Get all notifications from recipient
- Count all notifications from recipient
- Mark a notification as read
- Mark a notification as unread
- Cancel a notification

## Entities

Content

```json
{
  "content": "string"
}
```

Notification

```json
{
  "recipientId": "string",
  "content": "Content",
  "category": "string",
  "readAt": "Date",
  "canceledAt": "Date",
  "createdAt": "Date"
}
```

## Installation

Clone the repository and install the dependencies.

```bash
git clone
cd notifications-service
npm install
```

## Usage

```bash
npm run start:dev
```

## Project status

This project is still in development.
