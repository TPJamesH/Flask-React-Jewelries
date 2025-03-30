from typing import List
from .jewelry_model import Jewelry
from flask_sqlalchemy import SQLAlchemy
#Generator
def generator(db: SQLAlchemy):
    J_list = List[Jewelry]
    J_list = [
    Jewelry(
    type="bracelet",
    name="Ruby Bracelet",
    provider="Elegant Creations",
    totalWeight=80.0,
    stoneWeight=25.0
    ),
    Jewelry(
        type="earrings",
        name="Emerald Earrings",
        provider="Sparkle Studio",
        totalWeight=50.0,
        stoneWeight=15.0
    ),
    Jewelry(
        type="pendant",
        name="Sapphire Pendant",
        provider="Luxury Gems Inc.",
        totalWeight=60.0,
        stoneWeight=20.0
    ),
    Jewelry(
        type="bangle",
        name="Gold Bangle",
        provider="Golden Craft",
        totalWeight=120.0,
        stoneWeight=0.0
    ),
    Jewelry(
        type="ring",
        name="Platinum Ring",
        provider="Royal Gems",
        totalWeight=70.0,
        stoneWeight=10.0
    ),
    Jewelry(
        type="necklace",
        name="Amethyst Necklace",
        provider="Gemstone Artisans",
        totalWeight=150.0,
        stoneWeight=50.0
    ),
    Jewelry(
        type="bracelet",
        name="Diamond and Gold Bracelet",
        provider="Luxury Gems Inc.",
        totalWeight=90.0,
        stoneWeight=40.0
    ),
    Jewelry(
        type="earrings",
        name="Pearl Earrings",
        provider="Oceanic Jewels",
        totalWeight=35.0,
        stoneWeight=12.0
    ),
    Jewelry(
        type="pendant",
        name="Heart-Shaped Pendant",
        provider="Elegant Creations",
        totalWeight=65.0,
        stoneWeight=25.0
    ),
    Jewelry(
        type="bangle",
        name="Diamond Bangle",
        provider="Golden Craft",
        totalWeight=110.0,
        stoneWeight=45.0
    )]
    db.session.add_all(J_list)
    db.session.commit()