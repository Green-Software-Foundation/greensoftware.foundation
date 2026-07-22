---
title: "Companion Technical Note - Completing the Architecture: The Internal Interoperability Layer"
date: 2026-07-22
published: true
status: published
type: paper
summary: >
  A companion note to the SILO white paper "Bridging the Sustainability Gap," clarifying how the internal interoperability layer complements the external, grid-facing interface to form a complete, deployable specification.
workingGroup: silo
tags: ["silo", "hardware-standards"]
---

## Purpose

The white paper *Bridging the Sustainability Gap* describes an open specification that enables data centres to receive real-time grid signals and optimise their operation based on sustainability objectives.

This companion note clarifies the role of the internal interoperability layer described in the original technical proposal. The white paper focuses on the external interface between the data centre and the grid, while the technical proposal defines the internal semantics and interoperability capabilities that make those interactions practical in heterogeneous, multi-vendor environments.

## Architecture

The two documents describe complementary components of the same architecture:

| Layer |
|---|
| **Grid Operator / External Signals**<br>Renewable mix · Carbon intensity · Demand constraints |
| ↕ |
| **External Interface Specification (White Paper)**<br>Grid signal ingestion · Power source awareness · ESG output |
| ↕ |
| **Internal Interoperability Layer (This Proposal) — NEW**<br>Semantic normalization · Vendor-neutral translation · Data contracts |
| ↕ |
| **Existing WDPC Data Bus + Rack & Sensing + Facility Infrastructure** |

The internal layer sits between the existing WDPC data bus and the external interface, providing the semantic normalization and vendor-neutral translation that allows diverse systems to feed clean, consistent data upward — on which the external interface's grid-responsive decisions depend.

### Scope

| Internal Interoperability Layer (Proposal) | External Interface (White Paper) |
|---|---|
| Cross-system data normalization within the DC | DC ↔ Grid communication |
| Semantic model & vendor-neutral translation | Grid signal ingestion & ESG output |
| Enables: reliable external signals & responses | Requires: unified internal data |

Neither component is sufficient alone. The external interface without the internal layer works only in homogeneous, single-vendor environments. Together they form a complete, deployable specification.
