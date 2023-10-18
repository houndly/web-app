import axios from "axios";
export const AuthAxios = axios.create({
    headers: {
        country: "EC",
        lang: "ES",
        entity: "TME",
        system: "NC",
        subsystem: `${process.env.REACT_APP_API_USER}`,
        originator: "EC:TME:ONIX:CRM",
        sender: "esbInfraBroker",
        userid: `${process.env.REACT_APP_API_USER}`,
        wsId: "te1111.gest.cpd-instSap01",
        wsIp: "10.5.1.215",
        wsIpv6: "0101:ca75:0101:ca75:0101:ca75:0101:ca75",
        operation: "sendSmsRequest",
        destination: "AR:GSAP:CRM:e-Commerce",
        pid: "550e8400-e29b-41d4-a716-446655440000",
        execId: "550e8400-e29b-41d4-a716-446655440001",
        msgId: "550e8400-e29b-41d4-a716-446655440002",
        timestamp: "2018-02-02T00:00:00.000+05:00",
        msgTYPE: "REQUEST",
        Authorization: `${process.env.REACT_APP_API_AUTH}`,
        Contentype: "application/json"
      },
      baseURL: process.env.REACT_APP_API_HOST
}) 