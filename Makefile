install:
	Rscript -e 'install.packages(c("blogdown"),repos = "http://cran.us.r-project.org")' -e 'blogdown::install_hugo()'


build:
	Rscript -e 'blogdown::build_site()'

serve:
	Rscript -e 'blogdown::serve_site()'
