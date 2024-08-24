'use client';

import { useEffect, useState } from "react";
import { Group, Code, Button, Burger, Drawer, ScrollArea, rem } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import {
  IconDashboard,
  IconTruckLoading,
  IconFingerprint,
  IconBuildingFactory2,
  IconUser,
  IconMenu2,
  IconShoppingBag,
} from "@tabler/icons-react";
import { WalletMultiButton, WalletDisconnectButton } from "@solana/wallet-adapter-react-ui";
import classes from "./Sidebar.module.css";
import { Image } from "@mantine/core";

const userData = [
  { link: "/", label: "Dashboard", icon: IconDashboard },
  { link: "/purchase", label: "Purchase", icon: IconShoppingBag },
  { link: "/profile", label: "Profile", icon: IconFingerprint },
];

const companyData = [
    { link: "/", label: "Dashboard", icon: IconDashboard },
    { link: "/logistic", label: "Logistic", icon: IconTruckLoading },
];

export function ResponsiveSidebar() {
  const [userRole, setUserRole] = useState("User");
  const [active, setActive] = useState("");
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    let value = localStorage.getItem("userRole") || "User";
    setUserRole(value);
  }, []);

  const data = userRole === "User" ? userData : companyData;

  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        window.location.href = item.link;
        setActive(item.label);
        close();
      }}>
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  const sidebar = (
    <>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          <Image radius="md" w={100} src="/logo.jpeg" />
          <Code fw={200}>v1.0.0</Code>
        </Group>
        <div style={{marginLeft: 20}}>

        <Toggle userRole={userRole} setUserRole={setUserRole} />
        </div>
        {links}
      </div>

      <div className={classes.footer}>
        <div className={classes.link}>
          <WalletMultiButton />
        </div>
        <div className={classes.link}>
          <WalletDisconnectButton />
        </div>
      </div>
    </>
  );

  return (
    <>
      <Burger opened={opened} onClick={open} className={classes.burger} size="sm" />
      <Drawer
        opened={opened}
        onClose={close}
        size="100%"
        padding="md"
        title=""
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
          {sidebar}
        </ScrollArea>
      </Drawer>
      <nav className={classes.navbar}>{sidebar}</nav>
    </>
  );
}

function Toggle({ userRole, setUserRole }) {
  const handleRoleChange = () => {
    const newRole = userRole === "User" ? "Company" : "User";
    setUserRole(newRole);
    localStorage.setItem("userRole", newRole);
  };

  return (
    <Button
    color="indigo"
      onClick={handleRoleChange}
      className={classes.toggleButton}
      lefticon={userRole === "User" ? <IconUser size={20} /> : <IconBuildingFactory2 size={20} />}
    >
      {userRole}
    </Button>
  );
}