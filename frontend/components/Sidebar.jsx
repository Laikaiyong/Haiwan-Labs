'use client';

import { useEffect, useState } from "react";
import { Group, Code, Button, Burger, Container, Collapse, Box } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import {
  IconDashboard,
  IconTruckLoading,
  IconFingerprint,
  IconBuildingFactory2,
  IconUser,
  IconShoppingBag,
} from "@tabler/icons-react";
import { WalletMultiButton, WalletDisconnectButton } from "@solana/wallet-adapter-react-ui";
import classes from "./Navbar.module.css";
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

export function ResponsiveNavbar() {
  const [userRole, setUserRole] = useState("User");
  const [active, setActive] = useState("");
  const [opened, { toggle }] = useDisclosure(false);

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
        toggle(); // Close the mobile menu when a link is clicked
      }}>
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <Box className={classes.root}>
      <header className={classes.header}>
        <Container size="xl">
          <div className={classes.inner}>
            <div className={classes.logoSection}>
              <Image radius="md" w={100} src="/logo.jpeg" />
              {/* <Code fw={200}>v1.0.0</Code> */}
            </div>
            <Group className={classes.links} spacing={5}>
              {links}
            </Group>
            <Group className={`${classes.rightSection}, ${classes.links}`}>
              <Toggle userRole={userRole} setUserRole={setUserRole} />
              <WalletMultiButton />
              <WalletDisconnectButton />
            </Group>
            <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
          </div>
        </Container>
      </header>
      <Container size="xl" p={0}>
        <Collapse in={opened}>
          <div className={classes.dropdown}>
            {links}
            <Group mt="md">
              <Toggle userRole={userRole} setUserRole={setUserRole} />
              <WalletMultiButton />
              <WalletDisconnectButton />
            </Group>
          </div>
        </Collapse>
      </Container>
    </Box>
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