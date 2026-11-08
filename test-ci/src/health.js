export function getHealthStatus({ health }) {
  if (health > 50) {
    return 'healthy';
  }

  if (health >= 15) {
    return 'wounded';
  }

  return 'critical';
}

export default getHealthStatus;
