exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  const typeDefs = `
    type Query {
      allMdx: [Mdx] # Define the 'allMdx' field as an array of 'Mdx' type
    }
  `;

  createTypes(typeDefs);
};
