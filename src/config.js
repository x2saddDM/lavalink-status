module.exports = {
  token: process.env.token || "", // Your bot token
  channelId: process.env.channelId || "", //Channel Id you want to send the message

  webMonitor: true, // Set to false if you don't want to use web-monitor
  expressPort: process.env.expressPort || 3000, // Port for web monitor

  nodes: [
    {
      host: "45.140.165.216",
      password: "youshallnotpass",
      port: 1046,
      identifier: "v3",
      secure: false,
      reconnectTimeout: 300000,
      reconnectTries: 100,
    }
  ],
};
