import React from "react";
export interface FooterGroup {
    title: string;
    links: { link: string, linkText: string, iconComponent: any }[];
}