---
layout: post
title: "To beat Intel MKL: finding Intel's 'secret sauce'"
categories: [Computing]
updated_date: 
---
The bulk of my research this summer centered around designing and implementing a faster version of complex matrix-vector multiplication — essentially, figuring out how to beat Intel MKL's kernel, the fastest version of matrix-vector multiplication for modern Intel processors. <!--more--> Without going into too much detail, improving upon MKL would help to speed up a critical section in [Millipede](https://scholarship.rice.edu/bitstream/handle/1911/107406/DING-DOCUMENT-2019.pdf?sequence=1&isAllowed=y) called linear precoding.

## Intel MKL Background

I thought it would be helpful to first go over some high-level knowledge about Intel MKL and in particular, BLAS, that I would have found useful when starting out (being totally new to the library). Also, I'll simply refer to Intel MKL as MKL from now on.

* MKL is a free library that provides optimized math routines (functions) for BLAS, LAPACK, ScaLAPACK, sparse solvers, fast Fourier transforms, and other problems.

* BLAS = Basic Linear Algebra Subprograms, and is a standard/specification originating in the 1970s for a set of common low-level linear algebra routines, such as vector arithmetic and matrix multiplication.

* So, MKL is one of [many libraries](https://en.wikipedia.org/wiki/Basic_Linear_Algebra_Subprograms#Implementations) that implement BLAS.

* **Where MKL shines is on Intel hardware; because it is written by Intel engineers, it is highly optimized for Intel processors.** See [here](https://news.ycombinator.com/item?id=21732902) for an interesting discussion on its performance on non-Intel processors.

* It's worth reading through the [naming convention for BLAS functions](https://software.intel.com/content/www/us/en/develop/documentation/mkl-developer-reference-fortran/top/blas-and-sparse-blas-routines/blas-routines/naming-conventions-for-blas-routines.html). As examples, here the 'c' prefix means a complex float data-type, 'ge' means general, and 'mv' or 'mm' indicates matrix-vector v.s. matrix-matrix:
  * `cgemv()` -> matrix-vector product with single-precision float complex data
  * `cgemm()` -> matrix-matrix product with single-precision float complex data  
&nbsp;
* Using MKL BLAS routines directly can feel a bit unwieldy, but MKL can be linked to higher level libraries such as Armadillo (C++), Eigen (C++), and numpy-mkl (Python) which wrap its functions in more modern, templated syntax.

To be continued...
