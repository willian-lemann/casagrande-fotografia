export type Type = "wedding" | "prewedding" | "others";

export function getPortifolioType(type: Type) {
  const labelBasedOnType: Record<Type, string> = {
    wedding: "Casamento",
    prewedding: "Pré Wedding",
    others: "Outros",
  };

  return labelBasedOnType[type];
}
