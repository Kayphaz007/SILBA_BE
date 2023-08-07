// this function takes in a schema and an array of ids

exports.findAndDeleteByIds = async (schema, [...arrayOfIds], refUser) => {
  try {
    const findArrayOfItemsByID = arrayOfIds.map(async (id) => {
      return schema.findOne({ refItem: id, refUser });
    });
    const items = await Promise.all(findArrayOfItemsByID);
    // to check that all items are not null i.e they are in the schema sent
    if (
      items.every((item) => {
        item != null;
      })
    ) {
      const deleteArrayOfPromise = arrayOfIds.map(async (id) => {
        return schema.deleteOne({ refItem: id, refUser });
      });
      await Promise.all(deleteArrayOfPromise);
    } else {
      // throw an error, null is among item or item not in schema
    }
    return items;
  } catch (error) {
    console.log(error);
  }
};
