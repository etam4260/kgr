library(hexSticker)


# Build for the kgr logo sticker
# Make sure current R working directory
# is in home project directory.

sticker("./man/figures/nodes.png", package = "kgr", p_size=20, s_x=1, s_y=.8,
        s_width=.4, s_height= .4, h_fill = "white", h_color = "grey",
        p_color = "grey", filename="./man/figures/logo.png")

