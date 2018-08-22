export const types = {
  RECEIVED_ENTITIES: "RECEIVED_ENTITIES"
};

export const receivedEntities = entities => {
  return { type: types.RECEIVED_ENTITIES, payload: entities };
};
