// First solution
function domainType(domains: string[]): string[] {
  return domains.map(domain => {
    if (domain.endsWith('.org')) {
      return 'organization';
    } else if (domain.endsWith('.com')) {
      return 'commercial';
    } else if (domain.endsWith('.net')) {
      return 'network';
    } else if (domain.endsWith('.info')) {
      return 'information';
    }
  });
}

console.log(
  domainType(['en.wiki.org', 'codefights.com', 'happy.net', 'code.info'])
);
