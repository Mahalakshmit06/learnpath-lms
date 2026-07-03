import dns from "dns";

dns.resolveSrv(
  "_mongodb._tcp.cluster0.pkukb9f.mongodb.net",
  (err, addresses) => {
    console.log(err);
    console.log(addresses);
  }
);