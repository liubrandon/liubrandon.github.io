---
layout: post
title: Yale research + upcoming posts
categories: [Computing, Misc]
updated_date: 
---

This summer, I've had the pleasure of working as a Research Assistant to Prof. Lin Zhong and Jian Ding at the [Yale Efficient Computing Lab](http://yecl.org/). My project relates to wireless networks, and in particular, 5G and massive multiple-input multiple-output (MIMO). Massive MIMO involves using multiple antennas at the transmitter and receiver to improve throughput and spectral efficiency, and it's seen as a key technology enabling 5G mobile networks.<!--more-->

For the last few years, Jian has been developing Millipede, a new software approach to real-time massive MIMO baseband processing. Massive MIMO baseband processing is computationally intensive and typically done by specialized hardware such as [FPGAs](https://en.wikipedia.org/wiki/Field-programmable_gate_array). Because FPGAs are installed per base station, updating the technology (say, for the transition from LTE to 5G) currently involves going to each network tower and physically replacing hardware — an expensive and slow process.

The key idea of performing baseband processing in software is that rather than perform computations individually at each base station, this work can be centralized in data centers, where compute time is cheap and updating technology is as quick as changing lines of code. In this sense, Jian's technology will enable us to move 5G base stations into the cloud.

To accomplish this, the software must run extremely fast — fast enough that it meets the latency standards for 5G New Radio and essentially as if everything was in real time. Every calculation and operation performed by the software must be as fast as the underlying hardware can support (in this case, general purpose processors). That is where my sub-project comes into play: implement a version of matrix-vector multiplication that is faster than the fastest public implementation out there, currently the proprietary one provided by Intel's Math Kernel Library (MKL).

I hope to write about some of the key topics I've learned in a way that's interesting (and ideally helpful) to other students, researchers or professionals out there. Below are some posts and topic areas I'm planning to write about:

## Planned posts

- Basic Linear Algebra Subprograms (BLAS) (i.e. Intel MKL, OpenBlas, and wrappers like Armadillo, Eigen, and Numpy)
- Data parallelization / Single Instruction Multiple Data (SIMD)
- Programming with Intel Intrinsics
- Intel MKL's JIT cgemm implementation (For matrix-vector product)
- Just-in-Time (JIT) compilation / Tutorial of the [Xbyak](https://github.com/herumi/xbyak) JIT assembler