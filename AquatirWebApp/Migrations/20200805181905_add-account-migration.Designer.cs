﻿// <auto-generated />
using AquatirWebApp.Db;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace AquatirWebApp.Migrations
{
    [DbContext(typeof(AquatirContext))]
    [Migration("20200805181905_add-account-migration")]
    partial class addaccountmigration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
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

            modelBuilder.Entity("AquatirWebApp.Models.Account", b =>
                {
                    b.HasOne("AquatirWebApp.Models.Goo", "wrGoo")
                        .WithMany()
                        .HasForeignKey("uGoo")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
