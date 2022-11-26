export default {
  type: "object",
  properties: {
    email: { type: "string" },
    cvv: { type: "number" },
    card_number: { type: "string" },
    expiration_month: { type: "string" },
    expiration_year: { type: "string" },
    token: { type: "string" },
  },
  required: [
    "email",
    "cvv",
    "card_number",
    "expiration_month",
    "expiration_year",
  ],
} as const;
