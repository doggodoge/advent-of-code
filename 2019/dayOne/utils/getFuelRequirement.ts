const getFuelRequirement = (componentMass: number): number =>
  Math.floor(componentMass / 3) - 2;

export default getFuelRequirement;
