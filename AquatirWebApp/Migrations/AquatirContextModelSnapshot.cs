﻿// <auto-generated />
using System;
using AquatirWebApp.Db;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace AquatirWebApp.Migrations
{
    [DbContext(typeof(AquatirContext))]
    partial class AquatirContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.6")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("AquatirWebApp.Models.Account", b =>
                {
                    b.Property<int>("AccountId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("AccountName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("uGoo")
                        .HasColumnType("int");

                    b.HasKey("AccountId");

                    b.HasIndex("uGoo");

                    b.ToTable("Accounts");
                });

            modelBuilder.Entity("AquatirWebApp.Models.Goo", b =>
                {
                    b.Property<int>("uGoo")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("cGoo")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("uGoo");

                    b.ToTable("wrGoo");
                });

            modelBuilder.Entity("AquatirWebApp.Models.Transaction", b =>
                {
                    b.Property<int>("TransactionId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("AccountId")
                        .HasColumnType("int");

                    b.Property<decimal>("Ammount")
                        .HasColumnType("decimal(10, 2)");

                    b.Property<bool>("IO")
                        .HasColumnType("bit");

                    b.Property<DateTime>("TransactionDate")
                        .HasColumnType("datetime2");

                    b.HasKey("TransactionId");

                    b.HasIndex("AccountId");

                    b.ToTable("Transactions");
                });

            modelBuilder.Entity("AquatirWebApp.Models.Account", b =>
                {
                    b.HasOne("AquatirWebApp.Models.Goo", "wrGoo")
                        .WithMany()
                        .HasForeignKey("uGoo")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("AquatirWebApp.Models.Transaction", b =>
                {
                    b.HasOne("AquatirWebApp.Models.Account", "Accounts")
                        .WithMany()
                        .HasForeignKey("AccountId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
